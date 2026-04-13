import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const initialHistory = [
  { id: "1", course: "Mobile Programming", date: "2026-03-01", status: "Present" },
  { id: "2", course: "Database System", date: "2026-03-02", status: "Present" },
  { id: "3", course: "Operating System", date: "2026-03-03", status: "Absent" },
  { id: "4", course: "Computer Network", date: "2026-03-04", status: "Present" },
  { id: "5", course: "Web Programming", date: "2026-03-05", status: "Present" },
  { id: "6", course: "Data Structure", date: "2026-03-06", status: "Absent" },
  { id: "7", course: "Algorithm Design", date: "2026-03-07", status: "Present" },
  { id: "8", course: "Software Engineering", date: "2026-03-08", status: "Present" },
  { id: "9", course: "Computer Architecture", date: "2026-03-09", status: "Present" },
  { id: "10", course: "Artificial Intelligence", date: "2026-03-10", status: "Absent" },
  { id: "11", course: "Machine Learning", date: "2026-03-11", status: "Present" },
  { id: "12", course: "Cloud Computing", date: "2026-03-12", status: "Present" },
  { id: "13", course: "Cyber Security", date: "2026-03-13", status: "Present" },
  { id: "14", course: "Internet of Things", date: "2026-03-14", status: "Absent" },
  { id: "15", course: "Blockchain Technology", date: "2026-03-15", status: "Present" },
  { id: "16", course: "Digital Marketing", date: "2026-03-16", status: "Present" },
  { id: "17", course: "UI/UX Design", date: "2026-03-17", status: "Present" },
  { id: "18", course: "Game Development", date: "2026-03-18", status: "Absent" },
  { id: "19", course: "DevOps", date: "2026-03-19", status: "Present" },
  { id: "20", course: "Big Data Analytics", date: "2026-03-20", status: "Present" },
  { id: "21", course: "Quantum Computing", date: "2026-03-21", status: "Present" },
  { id: "22", course: "Robotics", date: "2026-03-22", status: "Absent" },
  { id: "23", course: "Augmented Reality", date: "2026-03-23", status: "Present" },
  { id: "24", course: "Virtual Reality", date: "2026-03-24", status: "Present" }
];

const Home = () => {
  const [historyData, setHistoryData] = useState(initialHistory);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [currentTime, setCurrentTime] = useState('Memuat jam...');

  useEffect(() => {
    const timer = setInterval(() => {
      const timeString = new Date().toLocaleTimeString('id-ID', {
        hour: '2-digit', minute: '2-digit', second: '2-digit'
      });
      setCurrentTime(timeString);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCheckIn = () => {
    if (isCheckedIn) {
      Alert.alert("Perhatian", "Anda sudah melakukan Check In untuk kelas ini.");
      return;
    }

    const newAttendance = {
      id: Date.now().toString(),
      course: "Mobile Programming",
      date: new Date().toLocaleDateString('en-CA'),
      status: "Present"
    };

    setHistoryData([newAttendance, ...historyData]);
    setIsCheckedIn(true);
    Alert.alert("Sukses", `Berhasil Check In pada pukul ${currentTime}`);
  };

  const presentCount = historyData.filter(item => item.status === "Present").length;
  const absentCount = historyData.filter(item => item.status === "Absent").length;

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View>
        <Text style={styles.course}>{item.course}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons 
          name={item.status === "Present" ? "check-circle" : "cancel"} 
          size={20} 
          color={item.status === "Present" ? "green" : "red"}
          style={{ marginRight: 5 }}
        />
        <Text
          style={[
            item.status === "Present"
              ? styles.present
              : styles.absent
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Attendance App</Text>
          <Text style={styles.clockText}>{currentTime}</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.icon}>
            <MaterialIcons name="person" size={40} color="#555" />
          </View>

          <View>
            <Text style={styles.name}>Muhamad Zaldi Aprialdi</Text>
            <Text>NIM : 0320240040</Text>
            <Text>Class : Informatika-2A</Text>
          </View>
        </View>

        <View style={styles.classCard}>
          <Text style={styles.subtitle}>Today's Class</Text>
          <Text>Mobile Programming</Text>
          <Text>08:00 - 10:00</Text>
          <Text>Lab 114</Text>

          <TouchableOpacity
            style={[styles.button, isCheckedIn ? styles.buttonDisabled : styles.buttonActive]}
            onPress={handleCheckIn}
            disabled={isCheckedIn}
          >
            <Text style={styles.buttonText}>
              {isCheckedIn ? "CHECKED IN" : "CHECK IN"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.classCard}>
          <Text style={styles.subtitle}>Upcoming Class</Text>
          <Text>Database System</Text>
          <Text>10:30 - 12:30</Text>
          <Text>Lab 111</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.subtitle}>Attendance Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Present : {presentCount}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Absent : {absentCount}</Text>
          </View>
        </View>

        <View style={styles.classCard}>
          <Text style={styles.subtitle}>Attendance History</Text>
          
          <FlatList
            data={historyData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5"
  },
  content: {
    padding: 20,
    paddingBottom: 40
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15
  },
  name: {
    fontSize: 18,
    fontWeight: "bold"
  },
  classCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },
  button: {
    marginTop: 10,
    backgroundColor: "#007AFF",
    padding: 18,
    borderRadius: 8,
    alignItems: "center"
  },
  buttonText: {
    color: "white"
  },
  summaryCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20
  },
  summaryRow: {
    marginVertical: 5
  },
  summaryText: {
    fontSize: 16
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  course: {
    fontSize: 16
  },
  date: {
    fontSize: 12
  },
  present: {
    color: "green",
    fontWeight: "bold"
  },
  absent: {
    color: "red",
    fontWeight: "bold"
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  clockText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    fontVariant: ['tabular-nums'],
  },
  buttonActive: {
    backgroundColor: '#007AFF',
  },
  buttonDisabled: {
    backgroundColor: '#A0C4FF',
  }
});

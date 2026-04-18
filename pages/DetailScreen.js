import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  // Membongkar paket data yang dikirim dari HistoryScreen
  const { dataPresensi } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{dataPresensi.course}</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Tanggal:</Text>
          <Text style={styles.value}>{dataPresensi.date}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Status:</Text>
          <Text style={[styles.value, dataPresensi.status === "Present" ? styles.present : styles.absent]}>
            {dataPresensi.status}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Ruangan:</Text>
          <Text style={styles.value}>{dataPresensi.room}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Dosen Pengampu:</Text>
          <Text style={styles.value}>{dataPresensi.lecturer}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", padding: 20 },
  card: { backgroundColor: "white", padding: 20, borderRadius: 10, elevation: 3 },
  title: { fontSize: 22, fontWeight: "bold", borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 15, marginBottom: 15 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  label: { fontSize: 16, color: "gray" },
  value: { fontSize: 16, fontWeight: "bold", color: "#333" },
  present: { color: "green" },
  absent: { color: "red" }
});

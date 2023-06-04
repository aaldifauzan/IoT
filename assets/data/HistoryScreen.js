import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const exampleData = [
  { uid: '1', ir: 'IR1', timeIn: '2023-06-01 09:00', timeOut: '2023-06-01 17:00' },
  { uid: '2', ir: 'IR2', timeIn: '2023-06-02 08:30', timeOut: '2023-06-02 16:30' },
  { uid: '3', ir: 'IR3', timeIn: '2023-06-03 08:45', timeOut: '2023-06-03 17:15' },
  { uid: '1', ir: 'IR1', timeIn: '2023-06-01 09:00', timeOut: '2023-06-01 17:00' },
  { uid: '2', ir: 'IR2', timeIn: '2023-06-02 08:30', timeOut: '2023-06-02 16:30' },
  { uid: '3', ir: 'IR3', timeIn: '2023-06-03 08:45', timeOut: '2023-06-03 17:15' }, 
  { uid: '1', ir: 'IR1', timeIn: '2023-06-01 09:00', timeOut: '2023-06-01 17:00' },
  { uid: '2', ir: 'IR2', timeIn: '2023-06-02 08:30', timeOut: '2023-06-02 16:30' },
  { uid: '1', ir: 'IR1', timeIn: '2023-06-01 09:00', timeOut: '2023-06-01 17:00' },
  { uid: '2', ir: 'IR2', timeIn: '2023-06-02 08:30', timeOut: '2023-06-02 16:30' },
  { uid: '3', ir: 'IR3', timeIn: '2023-06-03 08:45', timeOut: '2023-06-03 17:15' },
  { uid: '3', ir: 'IR3', timeIn: '2023-06-03 08:45', timeOut: '2023-06-03 17:15' },
];

const HistoryScreen = () => {
  const [historyData, setHistoryData] = useState(exampleData);
  const [uidInput, setUidInput] = useState('');

  useEffect(() => {
    fetchHistoryData();
  }, []);

  // Function to fetch history data from the API
  const fetchHistoryData = async () => {
    try {
      const response = await fetch('YOUR_API_ENDPOINT'); // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
      const data = await response.json();
      setHistoryData(data);
    } catch (error) {
      console.error('Error fetching history data:', error);
    }
  };

  // Function to handle UID input
  const handleUidInput = () => {
    // Perform actions with the UID input
    console.log('UID input:', uidInput);

    // Filter history data based on UID input
    const filteredData = exampleData.filter(item => item.uid === uidInput);
    setHistoryData(filteredData);

    // Clear the input field
    setUidInput('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter UID"
          value={uidInput}
          onChangeText={setUidInput}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleUidInput}>
          <Text style={styles.submitButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.table}>
        {/* Table header */}
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>UID</Text>
          <Text style={styles.tableHeader}>IR</Text>
          <Text style={styles.tableHeader}>Time In</Text>
          <Text style={styles.tableHeader}>Time Out</Text>
        </View>

        {/* Table rows */}
        {historyData.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.uid}</Text>
            <Text style={styles.tableCell}>{item.ir}</Text>
            <Text style={styles.tableCell}>{item.timeIn}</Text>
            <Text style={styles.tableCell}>{item.timeOut}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    fontSize:12,
    fontFamily:'Poppins-Regular',
    borderColor: '#CCCCCC',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
  },
  submitButton: {
    backgroundColor: '#5F84A1',
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily:'Poppins-SemiBold'
  },
  table: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#DBECF4',
    marginBottom:20,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#22313F',
  },
  tableHeader: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontFamily:'Poppins-SemiBold',
    textAlign: 'center',
    backgroundColor: '#22313F',
    color: '#FFFFFF',
  },
  tableCell: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    textAlign: 'center',
  },
});

export default HistoryScreen;
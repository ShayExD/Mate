import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Theme from '../../../assets/styles/theme';
import { VerticalScale, windowHeight } from '../../utils';
import BackArrow from '../../components/BackArrow/backArrow';
import { TextInput, Button } from 'react-native-paper';
import Input from '../../components/Input/input';
import ButtonLower from '../../components/ButtonLower/buttonLower';
import { Avatar } from 'react-native-paper';
import axios from 'axios';
import AgePicker from '../../components/AgePicker/agePicker';
import DatePickerComponent from '../../components/DatePicker/datePicker';
import CountryPicker from '../../components/CountryPicker/countryPicker';
import ProfilePicturePicker from '../../components/ProfilePicturePicker/profilePicturePicker';

export default function EditProfile() {
	const [data, setData] = useState([]);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [age, setAge] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [profilePicture, setProfilePicture] = useState(null);





	
    const handleImagePick = (image) => {
        setProfilePicture(image);
      };
    
	const handleLogin = () => {
		console.log('Email:', email);
		console.log('Password:', password);
	};
	// const handleLogin = async () => {
	//   try {
	//     const response = await axios.get(`https://localhost:7271/api/User`);
	//     setData(response.data);
	//     console.log('Data fetched successfully:', response.data);
	//   } catch (error) {
	//     console.error('Error fetching data:', error);
	//   }
	// };

	return (
		<ScrollView
			contentContainerStyle={styles.screen}
			showsVerticalScrollIndicator={false}>
			<BackArrow />
			<Text style={[Theme.primaryTitle, styles.title]}>בניית הפרופיל שלך</Text>
			<View style={styles.avatarContainer}>
				<Avatar.Image
					size={150}
					source={require('../../../assets/images/avatar.jpg')}
				/>
			</View>
			<Text style={[Theme.primaryText, styles.text]}>
				מלא את השדות הבאים על מנת להירשם
			</Text>
            <ProfilePicturePicker onImagePick={handleImagePick} />

			<View style={styles.inputsContainer}>
				<TextInput
					label={'שם מלא'}
					value={email}
					onChangeText={setEmail}
					style={styles.input}
					mode="outlined"
					activeOutlineColor="#E6824A"
					selectionColor="gray"
					textAlign="right"
				/>
				<TextInput
					label={'שם מלא'}
					value={email}
					onChangeText={setEmail}
					style={styles.input}
					mode="outlined"
					activeOutlineColor="#E6824A"
					selectionColor="gray"
					textAlign="right"
				/>
				<DatePickerComponent
					selectedDate={selectedDate}
					onDateChange={setSelectedDate}
				/>
				<TextInput
					label={'הצגה'}
					value={email}
					onChangeText={setEmail}
					style={styles.input}
					mode="outlined"
					activeOutlineColor="#E6824A"
					selectionColor="gray"
					textAlign="right"
				/>
				<AgePicker selectedAge={age} onAgeChange={setAge} />
               
				<TextInput
					label={'סיסמה'}
					value={password}
					onChangeText={setPassword}
					style={styles.input}
					mode="outlined"
					secureTextEntry
					activeOutlineColor="#E6824A"
					selectionColor="gray"
					textAlign="right"
				/>
				<CountryPicker
        		selectedCountries={selectedCountries}
        		onCountryChange={setSelectedCountries}
        		/>
				{/* ... */}
			</View>
			<ButtonLower textContent={'יצירת פרופיל'} handlePress={handleLogin} />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flexGrow: 1,
		paddingVertical: 20,
	},
	title: {
		marginTop: windowHeight * 0.175,
		marginBottom: windowHeight * 0.0174,
	},
	inputsContainer: {
		marginTop: VerticalScale(44),
	},
	text: {
		color: 'gray',
		marginHorizontal: 0,
	},
	input: {
		marginBottom: VerticalScale(24),
		paddingHorizontal: 10,
		textAlign: 'left',
		direction: 'rtl',
	},
	button: {
		marginTop: 10,
	},
	avatarContainer: {
		alignItems: 'center',
		marginVertical: windowHeight * 0.05,
	},
	pickerContainer: {
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 5,
		marginBottom: VerticalScale(24),
	},
	picker: {
		height: 50,
		width: '100%',
	},
});

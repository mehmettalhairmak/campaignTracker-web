export const formatDate = (dateInput: string) => {
	const date = new Date(dateInput);

	// Ay isimleri dizisi
	const monthNames = [
		"Ocak",
		"Şubat",
		"Mart",
		"Nisan",
		"Mayıs",
		"Haziran",
		"Temmuz",
		"Ağustos",
		"Eylül",
		"Ekim",
		"Kasım",
		"Aralık",
	];

	// Tarih bilgilerini alıp formatlama
	var day = date.getDate();
	var month = monthNames[date.getMonth()];

	// Sonuç string'i oluşturma
	var formattedDate = day + " " + month;

	return formattedDate;
};

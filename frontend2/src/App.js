import React, {useState, useEffect} from 'react';

function App(){
	const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);
	const [buttonClicked, setButtonClicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	useEffect(() => {
		if (isSelected) {
		const formData = new FormData();

		formData.append('userfile', selectedFile);

		fetch(
			'http://localhost:8000/upload',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		}
	}, [buttonClicked])

	return(
   <div className="App">
			<input type="file" name="file" onChange={changeHandler} />
			{isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
					{/*	{selectedFile.lastModifiedDate.toLocaleDateString()} */}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={() => { setButtonClicked(true) }}>Submit</button>
			</div>
		</div>
	)
}

export default App;

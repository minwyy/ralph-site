import React from 'react';
import ReactPDF, {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    PDFViewer,
    Image,
    Font,
    Link
  } from '@react-pdf/renderer';
import path from 'path';
import fs from 'fs';

import { CVDoc } from './cv'

Font.register({
	family: 'DefaultFont',
	fonts: [
		{ src: path.join(__dirname, './fonts/Montserrat-Regular.ttf') },
		{
			src: path.join(__dirname, './fonts/Montserrat-SemiBold.ttf'),
			fontWeight: 700
		},
		{
			src: path.join(__dirname, './fonts/Montserrat-Italic.ttf'),
			fontStyle: 'italic'
		}
	]
})

const imagePath = path.join(__dirname, '../images/profile-cv.jpg')
// console.log(imagePath)
const imageB64 = fs.readFileSync(imagePath,
	'base64'
)

ReactPDF.render(
	<CVDoc image={imagePath} />,
	path.join(__dirname, '../../public/cv.pdf')
)
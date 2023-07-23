import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import React from "react";

export default function Home() {
	const [filBase64, setFileBase64] = React.useState<string>("");

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = (e) => {
			setFileBase64(e.target?.result?.toString() ?? "");
		};
		reader.readAsDataURL(file);
	};

	const handleFileUpload = async () => {
		try {
			const res = await fetch("/api/upload", {
				method: "POST",
				body: JSON.stringify({ file: filBase64 }),
			});
			const data = await res.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<input type="file" onChange={handleFileChange} />
			<button onClick={handleFileUpload}>Upload</button>
		</>
	);
}

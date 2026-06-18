
// Import xlsx package for reading Excel files
import * as XLSX from 'xlsx';
// Function to read data from Excel file
export function readExcel(filePath: string) {
    // Read workbook from provided file path
    const workbook = XLSX.readFile(filePath);
    // Get first sheet name from workbook
    const sheetName = workbook.SheetNames[0];
    // Access the first worksheet
    const worksheet = workbook.Sheets[sheetName];
    // Convert worksheet data into JSON format
    const data = XLSX.utils.sheet_to_json(worksheet);
    // Return extracted data
    return data;
}
 
 
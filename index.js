const { GoogleSpreadsheet } = require('google-spreadsheet');
const doc = new GoogleSpreadsheet('공유파일 URL ID');
const creds = require('JSON key file);

async function accessSpreadsheet() {
  await doc.useServiceAccountAuth(creds);

  await doc.loadInfo();
  console.log(doc.title); // doc name
}

accessSpreadsheet();

async function addRow() {
  // create a sheet and set the header row
  const sheet = await doc.addSheet({ headerValues: ['name', 'email'] });
  
  // append rows
  const larryRow = await sheet.addRow({ name: 'Larry Page', email: 'larry@google.com' });
  const moreRows = await sheet.addRows([
    { name: 'Sergey Brin', email: 'sergey@google.com' },
    { name: 'Eric Schmidt', email: 'eric@google.com' },
  ]);
  
  // read rows
  const rows = await sheet.getRows(); // can pass in { limit, offset }
  console.log(rows[1]); 
}

addRow()

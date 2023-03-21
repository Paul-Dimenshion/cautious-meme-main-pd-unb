import { openDB } from 'idb';

/* The initdb function is executed when the code is first run,
and it checks if the "jate" database already exists before creating it if it does not exist. */
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// This function saves a piece of content to the "jate" object store with an id of 1.
export const putDb = async (content) => {
  const jateDb = await openDB('jate', 1);
  const trxn = jateDb.transaction('jate', 'readwrite');
  const objStore = trxn.objectStore('jate');
  const request = objStore.put({ id: 1, value: content });
  const result = await request;
  console.log('content saved: ', result);
};

// This function retrieves all the content stored in the "jate" object store.
export const getDb = async () => {
  const jateDb = await openDB('jate', 1);
  const trxn = jateDb.transaction('jate', 'readonly');
  const objStore = trxn.objectStore('jate');                              
  const request = objStore.getAll();
  const result = await request;
  console.log('get value: ', result);
  return result?.value;
};

// This function deletes a piece of content from the "jate" object store based on the given id.
export const deleteDb = async () => {
  const jateDb = await openDB('jate', 1);
  const trxn = jateDb.transaction('jate', 'readwrite');
  const objStore = trxn.objectStore('jate');
  const request = objStore.delete(id);
  const result = await request;
  console.log('delete value: ', result);
  return result?.value;
}

initdb();

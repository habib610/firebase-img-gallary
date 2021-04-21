import React, { useEffect, useState } from 'react';
import { projectFirestore, projectStorage, timestamp } from '../../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(()=> {
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap)=> {
            let parentage = ( snap.bytesTransferred / snap.totalBytes ) * 100
            setProgress(parentage)
        }, (err)=> {
            setError(err)
        }, async()=> {
            const url = await storageRef.getDownloadURL()
            setUrl(url)
            const createdAt = timestamp()
            collectionRef.add({url, createdAt})
        })
    }, [file])
    return {progress, url, error};
};

export default useStorage;
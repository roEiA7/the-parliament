import { useState, useEffect, useMemo, Dispatch, SetStateAction } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { isEmpty } from "../../utils/object";

const isFunction = (
  value: unknown
): value is (prevState: unknown) => unknown => {
  return typeof value === "function";
};

export const useDoc = <IDocData>(
  collectionPath: string,
  docId: string,
  initialValue: IDocData
): [IDocData, Dispatch<SetStateAction<IDocData>>, boolean] => {
  const [data, setData] = useState<IDocData>(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  const docRef = useMemo(() => {
    return doc(db, collectionPath, docId);
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(docRef, (doc) => {
      if (!isLoaded) {
        setIsLoaded(true);
      }

      if (doc.exists()) {
        const data = doc.data();
        setData((isEmpty(data) ? undefined : data.array) as IDocData);
      }
    });

    return () => unsub();
  }, [docRef]);

  const updateData: Dispatch<SetStateAction<IDocData>> = async (value) => {
    const newDocData = { array: isFunction(value) ? value(data) : value }
    await setDoc(docRef, newDocData || {});
  };

  return [data, updateData, isLoaded];
};

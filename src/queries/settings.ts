import { Badge, BadgeTypes } from "../Pages/User/Dashboard/Settings/Collections";
import { Settings } from "../components/types/typesUsed";
import { db } from "../context/firebase";

export const getSettings = async (uid: string) => {
  const { getDoc, doc } = await import("firebase/firestore");
  const { settings } = (await getDoc(doc(db, "users", uid))).data() as {
    settings: Settings | null;
  };

  if (!settings) {
    return {};
  }

  return settings as Settings;
};

export const getBadges = async (uid: string) => {
  const { getDoc, doc } = await import("firebase/firestore");
  const data = (await getDoc(doc(db, "users", uid, "bag", "badges"))).data() as Record<
    string,
    [BadgeTypes, string, boolean]
  >;
  if (!data) return { data: {}, formattedData: [] };
  const formattedData = Object.keys(data).map((key) => {
    const badge = data[key];
    return { label: badge[0], background: badge[1], enabled: badge[2] } satisfies Badge;
  });
  return { data, formattedData };
};

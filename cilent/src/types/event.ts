export interface AnimeEvent {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  type: "cosplay" | "exhibition" | "concert" | "pop-up";
  image: string;
  link: string;
  description: string;
}

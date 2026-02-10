import { Metadata } from "next";
import EventsPage from "@/pages/EventsPage"

export const metadata: Metadata = {
  title: "Events | Human-Centered Computing (HCC)",
  description: "Upcoming events hosted by the HCC team",
};

function Events() {
  return(
    <EventsPage />
  );
}

export default Events;

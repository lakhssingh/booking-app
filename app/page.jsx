import Heading from "@/components/Heading";
import RoomCard from "@/components/RoomCard";
import rooms from "@/data/rooms.json";

export default function Home() {
  return (
    <>
      <Heading title="Avaliable Rooms" />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard room={room} />)
      ) : (
        <p>No rooms avaliable at the moment</p>
      )}
    </>
  );
}

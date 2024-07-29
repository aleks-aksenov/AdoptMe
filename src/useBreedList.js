import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList.js";

export default function useBreedList(animal) {
  const results = useQuery({
    queryKey: ["breeds", animal],
    queryFn: () => fetchBreedList(animal),
  });

  return [results?.data?.breeds ?? [], results.status];
}

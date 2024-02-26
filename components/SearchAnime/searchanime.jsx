"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchAnime() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (event) => {
    const params = new URLSearchParams(searchParams);
    if (event.target.value.length > 2) {
      params.set("query", event.target.value);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <>
      <input
        type="text"
        style={{ width: "80%", height: "40px" }}
        placeholder="Search for your favorite anime"
        onChange={handleSearch}
        defaultValue={searchParams.get("query")?.toString()}
      ></input>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { GetUsers } from "../services/GetUsers.ts";
import SearchBar from "../common/SearchBar.tsx";
import SortUser from "../common/SortUser.tsx";

interface Users {
  name: string;
  email: string;
  id: number;
}

export default function UserProfile() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<Users[]>([]);
  const [searchUser, setSearchUser] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("");

  useEffect(() => {
    GetUsers().then((data) => {
      setUsers(data);
      setIsLoading(false);
    });
  }, []);

  //filter
  //case sensitive

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchUser.toLowerCase())
  );

  // sort a-z email or name
  // a-z and z-a
  // dropdown

  const sortedUsers = filteredUsers.sort((a, b) => {
    if (sortOption.startsWith("nameA")) {
      return a.name.localeCompare(b.name);
    }
    if (sortOption.startsWith("nameZ")) {
      return b.name.localeCompare(a.name);
    }
    if (sortOption.startsWith("emailA")) {
      return a.email.localeCompare(b.email);
    }
    if (sortOption.startsWith("emailZ")) {
      return b.email.localeCompare(a.email);
    }
    return 0;
  });

  return (
    <div>
      <h1>Users</h1>
      <br />
      <SearchBar searchUser={searchUser} setSearchUser={setSearchUser} />
      <br />
      <SortUser setSortOption={setSortOption} />
      {isLoading && <h5>Content is Loading...</h5>}
      {sortedUsers.map((user) => {
        return (
          <p key={user.id}>
            {sortOption.startsWith("name") ? user.name : user.email}
          </p>
        );
      })}
    </div>
  );
}

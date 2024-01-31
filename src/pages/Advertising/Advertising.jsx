
import { useState } from "react";
import { personalData, searchFilter } from "../../components/data";
import Sidebar from "../Dashboard/Sidebar";
import AdvTop from "./AdvTop";
import Advsidebar from "./Advsidebar";
import Stock from "./Stock/Stock";

export default function Advertising() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchData, setSearchData] = useState(searchFilter);
    const [showSearchFilter, setShowSearchFilter] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const filteredPersonalData = personalData.filter((data) =>
      data.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const handleToggle = (id) => {
      setSearchData((prevSearchData) => {
        const updatedSearchData = prevSearchData.map((item) => {
          if (item.id === id) {
            console.log(item.isTrue, id);
            return {
              ...item,
              isTrue: !item.isTrue,
            };
          }
          return item;
        });
        return updatedSearchData;
      });
    };
  
    const handleShow = (id) => {
      personalData.map((item) => {
        if (item.id === id) {
          item.isEdit = !item.isEdit;
        }
        console.log(item.isEdit);
      });
      return personalData;
    };
  return (
    <>
      <div className="max-w-[1920px] h-screen flex my-0 mx-auto">
        <div className="flex border">
            <Sidebar />
            <Advsidebar />
        </div>
        <div className="flex flex-col w-full">
            <AdvTop searchQuery={searchQuery} handleSearchChange={handleSearchChange} showSearchFilter={showSearchFilter} setShowSearchFilter={setShowSearchFilter} searchData={searchData} handleToggle={handleToggle} showFilter={showFilter} setShowFilter={setShowFilter}/>
            <Stock handleShow={handleShow} filteredPersonalData={filteredPersonalData}/>
        </div>
      </div>
    </>
  );
}

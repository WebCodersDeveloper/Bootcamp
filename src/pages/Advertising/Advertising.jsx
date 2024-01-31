import { useState } from "react";
import { personalData, searchFilter } from "../../components/data";
import Sidebar from "../Dashboard/Sidebar";
import AdvTop from "./AdvTop";
import Advsidebar from "./Advsidebar";
import Stock from "./Stock/Stock";
import Banner from "./Banner/Banner";

export default function Advertising() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState(searchFilter);
  const [showSearchFilter, setShowSearchFilter] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [sidebar, setSidebar] = useState(true);

  const [stock, setStock] = useState(true);
  const [banner, setBanner] = useState(false);
  const [reviews, setReviews] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const hanldeStock = () => {
    setStock(true);
    setBanner(false);
    setReviews(false);
    setNewsletter(false);
  };
  const handleBanner = () => {
    setBanner(true);
    setStock(false);
    setReviews(false);
    setNewsletter(false);
  };
  const handleReviews = () => {
    setBanner(false);
    setStock(false);
    setReviews(true);
    setNewsletter(false);
  };
  const handleNewsletter = () => {
    setBanner(false);
    setStock(false);
    setReviews(false);
    setNewsletter(true);
  };

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
        </div>
        <div className="flex w-full">
          <div>
            <Advsidebar
              sidebar={sidebar}
              setSidebar={setSidebar}
              stock={stock}
              banner={banner}
              reviews={reviews}
              newsletter={newsletter}
              handleBanner={handleBanner}
              handleNewsletter={handleNewsletter}
              handleReviews={handleReviews}
              hanldeStock={hanldeStock}
            />
          </div>
          <div className={`flex flex-col ${sidebar ? "w-[77%]" : "w-[90%]"}`}>
            <AdvTop
              searchQuery={searchQuery}
              handleSearchChange={handleSearchChange}
              showSearchFilter={showSearchFilter}
              setShowSearchFilter={setShowSearchFilter}
              searchData={searchData}
              handleToggle={handleToggle}
              showFilter={showFilter}
              setShowFilter={setShowFilter}
            />
            {stock && (
              <Stock
                handleShow={handleShow}
                filteredPersonalData={filteredPersonalData}
              />
            )}
            {banner && <Banner />}
          </div>
        </div>
      </div>
    </>
  );
}

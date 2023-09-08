"use client";

import React from "react";
import { FavrouteCardBox } from "./favouriteCard.style";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useRouter } from "next/navigation";

const FavouriteCard = ({ data, onFocus, onEnterPress }:any) => {
  const router = useRouter();
  const { ref, focused, focusKey } = useFocusable({
    onFocus,
    onEnterPress,
  });

  return (
    <FavrouteCardBox
      onClick={() => router.push("/media")}
      ref={ref}
      sx={
        focused
          ? { border: "2px solid white", padding: "6px", borderRadius: "50%" }
          : {
              border: "2px solid transparent",
              padding: "6px",
              // borderRadius: "50%",
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
              "& : hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 5px 15px #7b7b7b",
              },
            }
      }
    >
      <img src={data.imgLink} alt="" />
    </FavrouteCardBox>
  );
};

export default FavouriteCard;

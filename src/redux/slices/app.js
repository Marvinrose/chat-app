import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";

const initialStore = {
    sidebar: {
        open: false,
        type: "CONTACT",     // Can be CONTACT, STARRED, SHARED
    }
}

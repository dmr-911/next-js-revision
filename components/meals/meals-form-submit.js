"use client";
import { useFormStatus } from "react-dom";
import ImagePicker from "./image-picker";

const MealsFormSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting data..." : "Share Meal"}
    </button>
  );
};

export default MealsFormSubmit;

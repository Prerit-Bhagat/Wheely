import React from "react";
import { useForm } from "react-hook-form";
const Services = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log("Submitting: ", data);
    try {
      const carDetails = {
        manufacturer: data.manufacturer,
        model: data.models,
        condition: data.cylinders,
        cylinders: data.cylinders,
        fuel: data.fuel,
        odometer: data.odometer,
        title_status: data.title_status,
        transmission: data.transmission,
        drive: data.drive,
        type: data.type,
        paint_color: data.paint_color,
        car_age: data.car_age,
      };
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await fetch("http://127.0.0.1:5000/", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      console.log("Prediction:", result);
      alert(`Prediction: ${result.prediction}`);
    } catch (error) {
      console.log(error);
      alert("Failed to get prediction. Please try again.");
    }
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="manufacturer">Manufacturer:</label>
        <select
          id="manufacturer"
          {...register("manufacturer", {
            required: "Manufacturer is required",
          })}
        >
          <option value="">Select Manufacturer</option>
          <option value="nissan">Nissan</option>
          <option value="toyota">Toyota</option>
          <option value="honda">Honda</option>
          {/* Add more options */}
        </select>
        {errors.manufacturer && <p>{errors.manufacturer.message}</p>}

        <label htmlFor="model">Model:</label>
        <select
          id="model"
          {...register("model", { required: "Model is required" })}
        >
          <option value="">Select Model</option>
          <option value="altima">Altima</option>
          <option value="camry">Camry</option>
          {/* Add more options */}
        </select>
        {errors.model && <p>{errors.model.message}</p>}

        <label htmlFor="condition">Condition:</label>
        <select
          id="condition"
          {...register("condition", { required: "Condition is required" })}
        >
          <option value="">Select Condition</option>
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
        </select>
        {errors.condition && <p>{errors.condition.message}</p>}

        <label htmlFor="cylinders">Cylinders:</label>
        <input
          id="cylinders"
          type="text"
          placeholder="e.g., 4 cylinders"
          {...register("cylinders", {
            required: "Cylinders information is required",
          })}
        />
        {errors.cylinders && <p>{errors.cylinders.message}</p>}

        <label htmlFor="fuel">Fuel:</label>
        <select
          id="fuel"
          {...register("fuel", { required: "Fuel type is required" })}
        >
          <option value="">Select Fuel Type</option>
          <option value="gas">Gas</option>
          <option value="diesel">Diesel</option>
        </select>
        {errors.fuel && <p>{errors.fuel.message}</p>}

        <label htmlFor="odometer">Odometer:</label>
        <input
          id="odometer"
          type="number"
          placeholder="e.g., 101035"
          {...register("odometer", { required: "Odometer value is required" })}
        />
        {errors.odometer && <p>{errors.odometer.message}</p>}

        <label htmlFor="title_status">Title Status:</label>
        <select
          id="title_status"
          {...register("title_status", {
            required: "Title status is required",
          })}
        >
          <option value="">Select Title Status</option>
          <option value="clean">Clean</option>
          <option value="salvage">Salvage</option>
        </select>
        {errors.title_status && <p>{errors.title_status.message}</p>}

        <label htmlFor="transmission">Transmission:</label>
        <select
          id="transmission"
          {...register("transmission", {
            required: "Transmission type is required",
          })}
        >
          <option value="">Select Transmission</option>
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
        </select>
        {errors.transmission && <p>{errors.transmission.message}</p>}

        <label htmlFor="drive">Drive:</label>
        <select
          id="drive"
          {...register("drive", { required: "Drive type is required" })}
        >
          <option value="">Select Drive Type</option>
          <option value="4wd">4WD</option>
          <option value="fwd">FWD</option>
        </select>
        {errors.drive && <p>{errors.drive.message}</p>}

        <label htmlFor="type">Type:</label>
        <select
          id="type"
          {...register("type", { required: "Vehicle type is required" })}
        >
          <option value="">Select Vehicle Type</option>
          <option value="suv">SUV</option>
          <option value="sedan">Sedan</option>
        </select>
        {errors.type && <p>{errors.type.message}</p>}

        <label htmlFor="paint_color">Paint Color:</label>
        <select
          id="paint_color"
          {...register("paint_color", { required: "Paint color is required" })}
        >
          <option value="">Select Paint Color</option>
          <option value="grey">Grey</option>
          <option value="black">Black</option>
        </select>
        {errors.paint_color && <p>{errors.paint_color.message}</p>}

        <label htmlFor="car_age">Car Age:</label>
        <input
          id="car_age"
          type="number"
          placeholder="e.g., 1"
          {...register("car_age", { required: "Car age is required" })}
        />
        {errors.car_age && <p>{errors.car_age.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Services;

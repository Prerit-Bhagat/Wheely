from flask import Flask, render_template, request, flash , jsonify
import joblib
import pandas as pd
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__, static_url_path='/static')
CORS(app, origins=["http://localhost:5173"])
app.config["SECRET_KEY"] = "secret_key"

# Load the model pipeline
pipeline_model = joblib.load("final_pipeline.joblib")


@app.route('/', methods=['GET', 'POST'])
def Home():
    prediction = None  # Initialize variable to store the prediction result
    if request.method == "POST":
        try:
            print('9999999999999999999999999',prediction)
            # Form data collection
            Manufacturer = request.form.get('manufacturer')
            car_model = request.form.get('model')
            condition = request.form.get('condition')
            cylinders = request.form.get('cylinders')
            fuel = request.form.get('fuel')
            odometer = int(request.form.get('odometer'))
            title_status = request.form.get('title_status')
            transmission = request.form.get('transmission')
            drive = request.form.get('drive')
            type_ = request.form.get('type')
            paint_color = request.form.get('paint_color')
            car_age = int(request.form.get('car_age'))

            # Create DataFrame for model prediction
            d = {
                'manufacturer': [Manufacturer],
                'model': [car_model],
                'condition': [condition],
                'cylinders': [cylinders+' cylinders'],
                'fuel': [fuel],
                'odometer': [odometer],
                'title_status': [title_status],
                'transmission': [transmission],
                'drive': [drive],
                'type': [type_.upper()],
                'paint_color': [paint_color],
                'car_age': [car_age]
            }

            df = pd.DataFrame(d)
            # Predict using the pipeline model
            prediction = pipeline_model.predict(df)[0]
            
        except Exception as e:
            return jsonify({'error': str(e)}), 500

    
    if prediction is None:
        prediction=0
    # prediction=0  
    return jsonify({'prediction': prediction})


if __name__ == '__main__':
    app.run(debug=True)

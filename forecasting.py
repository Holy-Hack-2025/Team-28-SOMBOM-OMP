import numpy as np
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# Historical data for smartphone sales (weeks vs sales)
weeks = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).reshape(-1, 1)
sales = np.array([500, 520, 580, 600, 620, 610, 700, 720, 750, 800])

# Train a linear regression model for sales forecasting
model = LinearRegression()
model.fit(weeks, sales)

# Predict future sales based on the model
future_weeks = np.array([11, 12, 13, 14, 15]).reshape(-1, 1)
predicted_sales = model.predict(future_weeks)

# Visualizing the prediction
plt.scatter(weeks, sales, color='blue', label='Actual Sales')
plt.plot(weeks, model.predict(weeks), color='green', label='Model Prediction')
plt.scatter(future_weeks, predicted_sales, color='red', label='Predicted Sales')
plt.xlabel('Weeks')
plt.ylabel('Smartphone Sales')
plt.legend()
plt.show()

print("Predicted sales for future weeks:", predicted_sales)

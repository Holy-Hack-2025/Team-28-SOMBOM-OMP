import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Historical demand data (e.g., weeks vs demand units)
weeks = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).reshape(-1, 1)
demand = np.array([500, 550, 600, 620, 640, 660, 700, 720, 740, 780])

# Linear regression model
model = LinearRegression()
model.fit(weeks, demand)

# Predict demand for future weeks
future_weeks = np.array([11, 12, 13, 14, 15]).reshape(-1, 1)
predicted_demand = model.predict(future_weeks)

# Plotting the results
plt.scatter(weeks, demand, color='blue', label='Historical Demand')
plt.plot(weeks, model.predict(weeks), color='green', label='Model Prediction')
plt.scatter(future_weeks, predicted_demand, color='red', label='Predicted Demand')
plt.xlabel('Weeks')
plt.ylabel('Demand Units')
plt.legend()
plt.show()

print(f"Predicted demand for future weeks: {predicted_demand}")

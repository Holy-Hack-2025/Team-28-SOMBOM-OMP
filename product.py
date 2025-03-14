import random
import time

class IoTDevice:
    def __init__(self, product_id):
        self.product_id = product_id
        self.location = "Factory"
        self.battery_health = 100

    def update_status(self):
        # Simulate random updates in location and condition
        self.location = random.choice(["Factory", "Warehouse", "Distributor", "Customer", "Recycling"])
        self.battery_health -= random.uniform(0.1, 2.0)
        if self.battery_health < 0:
            self.battery_health = 0
        return {"product_id": self.product_id, "location": self.location, "battery_health": self.battery_health}

    def send_data(self):
        while self.battery_health > 0:
            status = self.update_status()
            print(f"Product {self.product_id} - Location: {status['location']} - Battery Health: {status['battery_health']:.2f}%")
            time.sleep(2)  # Simulate data being sent every 2 seconds

# Simulate IoT tracking for a smartphone
smartphone_iot = IoTDevice("Smartphone_A123")
smartphone_iot.send_data()

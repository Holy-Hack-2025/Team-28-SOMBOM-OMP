import random
import time

class IoTDevice:
    def __init__(self, product_id):
        self.product_id = product_id
        self.location = "Factory"
        self.temperature = 25.0

    def update_status(self):
        # Simulate changes in product status
        self.location = random.choice(["Factory", "Warehouse", "Distributor", "Customer", "Recycling"])
        self.temperature += random.uniform(-0.5, 0.5)
        return {"product_id": self.product_id, "location": self.location, "temperature": self.temperature}

    def send_data(self):
        while True:
            status = self.update_status()
            print(f"Product {self.product_id} - Location: {status['location']} - Temperature: {status['temperature']:.2f}°C")
            time.sleep(2)  # Simulate real-time data sending

# Simulate IoT for product tracking
product_iot_device = IoTDevice(product_id="A12345")
product_iot_device.send_data()

from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Dummy data for blockchain, AI predictions, and IoT monitoring
class BlockchainEntry(BaseModel):
    block: int
    event: str
    hash: str

class SalesPrediction(BaseModel):
    week: int
    predictedSales: int

class IoTEntry(BaseModel):
    product: str
    location: str
    battery_health: float

@app.get("/blockchain/", response_model=List[BlockchainEntry])
async def get_blockchain_log():
    return [
        {"block": 1, "event": "Product A manufactured", "hash": "0x123abc"},
        {"block": 2, "event": "Product A shipped to distributor", "hash": "0x456def"},
        {"block": 3, "event": "Product A returned for recycling", "hash": "0x789ghi"}
    ]

@app.get("/sales-prediction/", response_model=List[SalesPrediction])
async def get_sales_prediction():
    return [
        {"week": 11, "predictedSales": 820},
        {"week": 12, "predictedSales": 840},
        {"week": 13, "predictedSales": 860},
        {"week": 14, "predictedSales": 880},
        {"week": 15, "predictedSales": 900}
    ]

@app.get("/iot-monitoring/", response_model=List[IoTEntry])
async def get_iot_updates():
    return [
        {"product": "Product_A123", "location": "Factory", "battery_health": 100},
        {"product": "Product_A123", "location": "Warehouse", "battery_health": 95},
        {"product": "Product_A123", "location": "Distributor", "battery_health": 92},
        {"product": "Product_A123", "location": "Customer", "battery_health": 85},
        {"product": "Product_A123", "location": "Recycling", "battery_health": 0}
    ]

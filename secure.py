import hashlib
import time

class Block:
    def __init__(self, index, previous_hash, timestamp, data, hash):
        self.index = index
        self.previous_hash = previous_hash
        self.timestamp = timestamp
        self.data = data
        self.hash = hash

    @staticmethod
    def calculate_hash(index, previous_hash, timestamp, data):
        value = str(index) + previous_hash + str(timestamp) + data
        return hashlib.sha256(value.encode()).hexdigest()

    @classmethod
    def create_genesis_block(cls):
        return cls(0, "0", time.time(), "Genesis Block", cls.calculate_hash(0, "0", time.time(), "Genesis Block"))

    @classmethod
    def create_next_block(cls, previous_block, data):
        index = previous_block.index + 1
        timestamp = time.time()
        hash = cls.calculate_hash(index, previous_block.hash, timestamp, data)
        return cls(index, previous_block.hash, timestamp, data, hash)

class Blockchain:
    def __init__(self):
        self.chain = [Block.create_genesis_block()]

    def get_latest_block(self):
        return self.chain[-1]

    def add_block(self, data):
        latest_block = self.get_latest_block()
        new_block = Block.create_next_block(latest_block, data)
        self.chain.append(new_block)

    def is_chain_valid(self):
        for i in range(1, len(self.chain)):
            current_block = self.chain[i]
            previous_block = self.chain[i - 1]

            if current_block.hash != Block.calculate_hash(current_block.index, current_block.previous_hash, current_block.timestamp, current_block.data):
                return False

            if current_block.previous_hash != previous_block.hash:
                return False

        return True

# Example usage in electronics supply chain
electronics_chain = Blockchain()
electronics_chain.add_block("Smartphone A manufactured")
electronics_chain.add_block("Smartphone A shipped to distributor")
electronics_chain.add_block("Smartphone A returned for recycling")

for block in electronics_chain.chain:
    print(f"Block {block.index} - Data: {block.data} - Hash: {block.hash}")

print("Is blockchain valid?", electronics_chain.is_chain_valid())

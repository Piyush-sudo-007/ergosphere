import faiss
import numpy as np
from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')

dimension = 384
index = faiss.IndexFlatL2(dimension)

texts = []
ids = []

def add_embedding(book_id, text):
    vector = model.encode([text])
    index.add(np.array(vector).astype('float32'))

    texts.append(text)
    ids.append(book_id)

def search(query):
    q_vec = model.encode([query])
    D, I = index.search(np.array(q_vec).astype('float32'), k=3)

    results = [texts[i] for i in I[0] if i < len(texts)]
    return results
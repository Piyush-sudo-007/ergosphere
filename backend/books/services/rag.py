from .embeddings import search
import openai

def answer_question(query):
    docs = search(query)
    context = " ".join(docs)

    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Answer using context"},
            {"role": "user", "content": f"Context: {context}\nQuestion: {query}"}
        ]
    )

    return response['choices'][0]['message']['content']
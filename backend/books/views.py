from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Book
from .serializers import BookSerializer
from .services.scraper import scrape_books
from .services.embeddings import add_embedding
from .services.rag import answer_question


@api_view(['GET'])
def get_books(request):
    books = Book.objects.all()
    return Response(BookSerializer(books, many=True).data)


@api_view(['GET'])
def book_detail(request, pk):
    book = Book.objects.get(id=pk)
    return Response(BookSerializer(book).data)


@api_view(['POST'])
def upload_books(request):
    scraped_books = scrape_books()

    for b in scraped_books:
        book = Book.objects.create(**b)

        # Add embedding for RAG
        add_embedding(book.id, book.description)

    return Response({"message": "Books uploaded successfully"})


@api_view(['POST'])
def ask_question(request):
    question = request.data.get("question")
    answer = answer_question(question)

    return Response({"answer": answer})


@api_view(['GET'])
def recommend_books(request):
    books = Book.objects.all()[:5]
    return Response(BookSerializer(books, many=True).data)
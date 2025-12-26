from fastapi import FastAPI
from dotenv import load_dotenv
from app.routes.notification import router

load_dotenv()

app = FastAPI(
    title="Notification Services API",
    version="1.0.0"
)

app.include_router(router, prefix="/notifications")

@app.get("/")
def health_check():
    return {"status": "Notification Service Running"}

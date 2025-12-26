from fastapi import APIRouter
from app.schemas.notification_schema import EmailNotification
from app.services.email_service import send_email

router = APIRouter()

@router.post("/email")
def send_email_notification(data: EmailNotification):
    send_email(data.to, data.subject, data.message)
    return {
         "status": "success",
        "to": data.to,
        "subject": data.subject,
        "message": data.message
    }

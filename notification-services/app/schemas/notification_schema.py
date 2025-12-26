from pydantic import BaseModel

class EmailNotification(BaseModel):
    to: str
    subject: str
    message: str

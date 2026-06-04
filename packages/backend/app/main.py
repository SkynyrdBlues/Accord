from typing import Literal

from fastapi import FastAPI
from pydantic import BaseModel, Field


class NoteEvent(BaseModel):
    pitch: int = Field(ge=0, le=127)
    start_beat: float = Field(ge=0)
    duration_beats: float = Field(gt=0)
    velocity: float = Field(ge=0, le=1)
    track: Literal["melody", "harmony", "continuation"]


class GenerateRequest(BaseModel):
    style_id: str = "stable_pop"
    melody: list[NoteEvent] = Field(default_factory=list)
    bars: int = Field(default=4, ge=1, le=16)


class GenerateResponse(BaseModel):
    style_id: str
    tempo: int
    chords: list[str]
    notes: list[NoteEvent]
    message: str


app = FastAPI(title="projChord API", version="0.1.0")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/generate")
def generate(request: GenerateRequest) -> GenerateResponse:
    # Placeholder only: the real pipeline will call rule baselines and model inference.
    melody = request.melody or [
        NoteEvent(pitch=72, start_beat=0, duration_beats=1, velocity=0.75, track="melody"),
        NoteEvent(pitch=74, start_beat=1, duration_beats=1, velocity=0.75, track="melody"),
        NoteEvent(pitch=76, start_beat=2, duration_beats=1, velocity=0.75, track="melody"),
        NoteEvent(pitch=79, start_beat=3, duration_beats=1, velocity=0.75, track="melody"),
    ]

    harmony = [
        NoteEvent(pitch=48, start_beat=0, duration_beats=4, velocity=0.55, track="harmony"),
        NoteEvent(pitch=52, start_beat=0, duration_beats=4, velocity=0.55, track="harmony"),
        NoteEvent(pitch=55, start_beat=0, duration_beats=4, velocity=0.55, track="harmony"),
    ]

    return GenerateResponse(
        style_id=request.style_id,
        tempo=104,
        chords=["C", "G", "Am", "F"],
        notes=[*melody, *harmony],
        message="Mock response. Replace with rule/model generation in Phase 1-3.",
    )

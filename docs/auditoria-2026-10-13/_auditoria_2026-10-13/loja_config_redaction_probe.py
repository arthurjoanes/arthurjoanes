import json
from pathlib import Path
from pydantic import ValidationError
from loja_assistente.config import Settings

marker = "audit-synthetic-key-NOT-A-CREDENTIAL"
try:
    Settings(_env_file=None, demo_mode=False, session_secret="s"*32, cookie_secure=False, openai_api_key=marker)
except ValidationError as error:
    rendered = str(error)
    result = {
      "startup_validation_rejected": True,
      "synthetic_key_visible_in_str_exception": marker in rendered,
      "synthetic_key_suffix_visible": "NOT-A-CREDENTIAL" in rendered,
      "hide_input_in_errors": Settings.model_config.get("hide_input_in_errors", False),
      "rendered_error": rendered,
      "limitation": "Synthetic marker only. No existing .env content, real key, provider or log service was used. The project constructs Settings() at module import, before application error handlers."
    }
else:
    raise AssertionError("Expected insecure COOKIE_SECURE=false to be rejected")
Path(__file__).with_suffix(".json").write_text(json.dumps(result, indent=2), encoding="utf-8")
print(json.dumps(result))


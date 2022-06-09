import type { RefCallback } from "react";
import { useRef, useEffect, useState, useCallback } from "react";

export type ElementState = "active" | "focus" | "hover" | "initial";

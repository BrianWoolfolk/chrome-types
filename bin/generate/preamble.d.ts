/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// TODO: These types exist to fill a gap in TS' built-in types.

interface Entry {}
interface DirectoryEntry extends Entry {}
interface FileEntry extends Entry {}
interface FileSystem {}
interface LocalMediaStream {}

type DOMFileSystem = FileSystem;

declare namespace chrome {
  // TODO: This fixes devtools' types which refer to 'global'.
  type global = typeof Window;
}

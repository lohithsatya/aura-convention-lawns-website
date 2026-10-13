# Gallery administration

Open the website URL with `/#admin` to sign in and manage gallery photos. The default credentials are `admin` / `aura@2026`. Uploaded images are compressed and stored in browser local storage. The public page shows the first eight photos; **View Gallery** opens the complete collection.

This is browser-local storage, not shared website storage: changes are visible only in the same browser on the same device. The sign-in is client-side and is not a security boundary. Use server-side authentication and image storage before relying on this portal for private or multi-user production updates.

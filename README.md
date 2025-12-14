# Static Craft CMS Export with DDEV + wget (Netlify)

## 1. Start the Craft site in DDEV

From your project root:

```bash
ddev start
```

Verify Craft runs:

```bash
ddev launch
```

Confirm:

- all pages load
- images load
- URLs are correct

Get the site URL:

```bash
ddev describe
```

Example:

```
https://my-site.ddev.site
```

---

## 2. Create a clean output directory

```bash
rm -rf public
mkdir public
```

This folder is the **Netlify deploy directory**.

---

## 3. Mirror the site into `/public`

```bash
wget -m -k -E -p -np -nH --no-check-certificate \
  --reject-regex '/admin|/cpresources' \
  https://YOURPROJECT.ddev.site \
  -P public
```

### What this does

- `-m` mirror the site
- `-k` convert links for static use
- `-E` add `.html` extensions
- `-p` download required assets
- `-np` do not crawl parent paths
- `-nH` **do not create `/public/<hostname>`**
- `--reject-regex` avoid Craft admin URLs

### Expected output

```
public/
  index.html
  about/index.html
  work/project-1/index.html
  assets/
  uploads/
```

---

## 4. Sanity-check locally

Before deploying, confirm the static site works:

```bash
serve public
```

Open:

```
http://localhost:3000
```

Click through the site. If it works here, it will work on Netlify.

---

## 5. Add Netlify configuration

Create `netlify.toml` in the project root:

```toml
[build]
  publish = "public"
  command = ""
```

This tells Netlify:

- serve `/public`
- do not run a build step

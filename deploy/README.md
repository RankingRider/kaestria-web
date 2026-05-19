# Kaestria Web — Deployment on VPS

Pattern identical to wix-app (cf `infra_wix_app_prod.md` memory).

## One-time setup on VPS

```bash
ssh root@srv1372631
mkdir -p /opt/kaestria-web
cd /opt/kaestria-web
git clone https://github.com/RankingRider/kaestria-web.git src
cp src/deploy/docker-compose.yml docker-compose.yml
docker compose up -d --build
```

Then in NGINX Proxy Manager UI:
- Create a new Proxy Host
- Domain Names: `kaestria.fr`, `www.kaestria.fr`
- Forward Hostname/IP: `172.17.0.1`
- Forward Port: `4003`
- SSL: request Let's Encrypt cert (with HTTP/2 + Force SSL + HSTS)

## Redeploy after `git push`

```bash
cd /opt/kaestria-web/src && git pull origin main
# If deploy/docker-compose.yml changed:
cp deploy/docker-compose.yml /opt/kaestria-web/docker-compose.yml
cd /opt/kaestria-web && docker compose up -d --build
```

Build is fast (~30 s) since the output is pure static files served by nginx:alpine.

## Smoke test

```bash
curl -sI https://kaestria.fr/         # 200, content-type text/html
curl -sI https://kaestria.fr/legal/   # 200
```

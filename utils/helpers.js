export function extractSecChUa(userAgent) {
    const chromeMatch = userAgent.match(/Chrome\/(\d+)/);
    const v = chromeMatch ? chromeMatch[1] : '122';
    return `"Google Chrome";v="${v}", "Chromium";v="${v}", "Not(A:Brand";v="24"`;
}

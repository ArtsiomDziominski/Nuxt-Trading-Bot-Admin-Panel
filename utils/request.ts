export function getHeadersRequest(payload: { key: string; body: string }[]) {
	return payload.map((item) => {
		return { [item.key]: item.body };
	});
}

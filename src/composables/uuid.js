let UUID = 0

export default function uuid() {
  const getID = () => {
    UUID++
    return UUID
  }

  return {
    getID
  }
}

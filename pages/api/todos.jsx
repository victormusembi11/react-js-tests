import axiosInstance from "@/lib/axios/axios";

export default async function handler(req, res) {
  try {
    const response = await axiosInstance("/todos");
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

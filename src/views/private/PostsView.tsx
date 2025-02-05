"use client"; // Add this line at the top to mark the component as a client component

import { useEffect, useState } from "react";

// MUI imports
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box"; // Import Box component

// Server action import
import { fetchPosts } from "@/app/actions/posts";

// Define the Post interface
interface User {
  image: string | null;
  id: string;
  name: string | null;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  emailVerified: Date | null;
}

interface PostData {
  id: string;
  userId: string;
  imageUrl: string;
  caption: string | null;
  createdAt: Date;
  updatedAt: Date;
  user: User;
}

interface Post {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  user: User;
  caption: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const PostView = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();

        // Map the fetched data to match the Post interface
        const postsData: Post[] = data.map((post: PostData) => {
          const postId = parseInt(post.id);
          const validId = !isNaN(postId) ? postId : Date.now();

          return {
            id: validId,
            title: post.caption || "Untitled",
            content: post.caption || "No content available",
            imageUrl: post.imageUrl || "/default-image.jpg",
            user: post.user,
            caption: post.caption,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
          };
        });

        setPosts(postsData);
      } catch (err) {
        setError("Failed to load posts. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", padding: "2rem" }}
    >
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
        Nedávne príspevky
      </Typography>

      {loading && (
        <Box display="flex" justifyContent="center" sx={{ marginBottom: "2rem" }}>
          <CircularProgress />
        </Box>
      )}

      {error && <Alert severity="error" sx={{ mb: 4 }}>{error}</Alert>}

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center" // Center the posts horizontally
        gap={4}
        sx={{ marginBottom: 4 }}
      >
        {posts.map((post, index) => (
          <Box
            key={`${post.id}-${index}`}
            sx={{
              width: { xs: "100%", sm: "48%", md: "30%" },
              height: "auto",
              display: "flex", // Ensure that the Box is a flex container to center the Card
              justifyContent: "center", // Center each post horizontally
            }}
          >
            <Card sx={{ height: "100%", width: "100%" }}>
              <CardMedia
                component="img"
                height="200"
                image={post.imageUrl}
                alt={post.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {post.user.name || "Anonymous User"}
                </Typography>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.content}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PostView;

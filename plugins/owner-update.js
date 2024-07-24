import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

const repoUrl = 'https://github.com/Xcelsama/STAR-V2';
const repoDir = join(process.cwd(), 'STAR-V2'); // Directory where the repo will be cloned

const handler = async (m, { conn, text }) => {
  if (conn.user.jid === conn.user.jid) {
    // Function to check if the directory is a Git repository
    const isGitRepository = (directory) => {
      return existsSync(join(directory, '.git'));
    };

    try {
      if (!existsSync(repoDir)) {
        // Clone the repository if it does not exist
        execSync(`git clone ${repoUrl} ${repoDir}`);
        conn.reply(m.chat, 'Repository cloned successfully.', m);
      } else if (isGitRepository(repoDir)) {
        // Pull the latest changes if it is already a Git repository
        execSync('git pull', { cwd: repoDir });
        conn.reply(m.chat, 'Repository updated successfully.', m);
      } else {
        conn.reply(m.chat, 'Error: The directory exists but is not a git repository.', m);
      }
    } catch (error) {
      conn.reply(m.chat, `Error occurred: ${error.message}`, m);
    }
  }
};

handler.help = ['update'];
handler.tags = ['owner'];
handler.command = ['update', 'actualizar', 'fix', 'fixed'];
handler.rowner = true;

export default handler;
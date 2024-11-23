# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.bun
    pkgs.git
  ];

  # Sets environment variables in the workspace
  env = {
    BUN_VERSION = "1.0.30"; # You can adjust this version as needed
  };

  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "dbaeumer.vscode-eslint"
      "esbenp.prettier-vscode"
      "oven.bun-vscode"
    ];

    # Enable previews
    previews = {
      enable = true;
      previews = {
        web = {
          # Run "bun run dev" with PORT set to IDX's defined port for previews
          command = ["bun" "run" "dev"];
          manager = "web";
          env = {
            PORT = "$PORT";
          };
        };
      };
    };

    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        bun-install = "bun install";
      };
      # Runs when the workspace is (re)started
      onStart = {
        # You can add any background tasks you want to run on startup
        # watch-mode = "bun run watch";
      };
    };
  };
}